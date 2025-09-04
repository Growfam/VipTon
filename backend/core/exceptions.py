# backend/core/exceptions.py - VipTon Custom Exceptions
from typing import Optional, Dict, Any


class VipTonException(Exception):
    """Базовий клас для всіх VipTon винятків"""

    def __init__(self, message: str, code: Optional[str] = None, details: Optional[Dict[str, Any]] = None):
        self.message = message
        self.code = code or 'VIPTON_ERROR'
        self.details = details or {}
        super().__init__(self.message)

    def to_dict(self) -> Dict[str, Any]:
        """Конвертація в словник для API відповіді"""
        result = {
            'error': self.message,
            'code': self.code
        }

        if self.details:
            result['details'] = self.details

        return result


class APIException(VipTonException):
    """Виняток для API помилок з HTTP статус кодом"""

    def __init__(self, message: str, status_code: int = 400, code: Optional[str] = None,
                 details: Optional[Dict[str, Any]] = None):
        self.status_code = status_code

        if not code:
            code = {
                400: 'BAD_REQUEST',
                401: 'UNAUTHORIZED',
                403: 'FORBIDDEN',
                404: 'NOT_FOUND',
                409: 'CONFLICT',
                429: 'TOO_MANY_REQUESTS',
                500: 'INTERNAL_ERROR'
            }.get(status_code, 'API_ERROR')

        super().__init__(message, code, details)


class AuthenticationException(APIException):
    """Виняток для помилок автентифікації"""

    def __init__(self, message: str = "Authentication failed", details: Optional[Dict[str, Any]] = None):
        super().__init__(message, 401, 'AUTH_FAILED', details)


class ResourceNotFoundException(APIException):
    """Виняток коли ресурс не знайдено"""

    def __init__(self, resource: str, identifier: Any = None):
        message = f"{resource} not found"
        details = {}

        if identifier:
            message = f"{resource} with id '{identifier}' not found"
            details['resource'] = resource
            details['identifier'] = str(identifier)

        super().__init__(message, 404, 'RESOURCE_NOT_FOUND', details)


class InsufficientBalanceException(APIException):
    """Виняток для недостатнього балансу"""

    def __init__(self, required: float = None, available: float = None):
        message = "Insufficient balance"
        details = {}

        if required is not None and available is not None:
            message = f"Insufficient balance. Required: {required} TON, Available: {available} TON"
            details['required'] = required
            details['available'] = available

        super().__init__(message, 400, 'INSUFFICIENT_BALANCE', details)


def handle_vipton_exception(error: VipTonException):
    """Обробник для VipTonException у Flask"""
    from flask import jsonify

    response = {
        'success': False,
        **error.to_dict()
    }

    status_code = 500
    if isinstance(error, APIException):
        status_code = error.status_code

    return jsonify(response), status_code
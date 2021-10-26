from django.utils.deprecation import MiddlewareMixin

def get_actual_value(request):
    if request.user is None:
        return None
    return request.user


class AccessControlMiddleware(MiddlewareMixin):
    def process_view(self, request, view_function, view_args, view_kwargs):
        auth_token = request.META.get('HTTP_AUTHORIZATION', None)

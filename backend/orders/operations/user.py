from ..models import User


class UserOperations:
    def __init__(self):
        self.model = User

    def get_all_queryset(self):
        return self.model.objects.all()

    def get_by_email(self, email):
        return self.model.objects.get(email=email)
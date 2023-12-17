from django.views.generic import TemplateView


class HomePage(TemplateView):
    template_name = "task/task.html"
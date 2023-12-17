from django.db import models

STATUS = (
    ("S", "started"),
    ("F", "finished"),
)
    

class Day(models.Model):
    day_title = models.CharField(max_length=50)
    day_date = models.DateField()
    status = models.CharField(choices=STATUS, max_length=50)

class Task(models.Model):
    day_title = models.TextField()
    started_time = models.TimeField(auto_now_add=True)
    finished_time = models.TimeField()
    status = models.CharField(choices=STATUS, max_length=50)
    issue_link = models.URLField()
    day = models.ForeignKey(Day, on_delete=models.CASCADE)
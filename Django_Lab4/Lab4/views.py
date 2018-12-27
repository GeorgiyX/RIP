from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotFound
from Lab4 import FilesList

def index(request):
    dict = FilesList.Get2ListOfFile()
    return render(request, 'index_final.html', context=dict)
def resp(request, param):
    return HttpResponse("You say:" + param)
def AboutTrack(request, name):
    diction = {'val' : name}
    diction['info'] = FilesList.Mp3Info(diction['val'])
    return render(request, 'AboutTrack.html', context=diction)
def redir(request):
    return HttpResponseRedirect("/ ")

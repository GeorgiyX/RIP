from .GeometricFrigure import *
from .ColorFigure import *
from math import pi
class Circle(GeometricFigure):
    def __init__(self, radius, color):
        self.radius = radius
        self.color = ColorFigure(color)
    name = 'Круг'
    def reName(self):
        return self.name
    def SquareOfFigure(self):
        return pi * self.radius * self.radius
    def __repr__(self):
        return "Имя = {}, Радиус = {}, Цвет = {}, Площадь = {}".format(self.reName(),self.radius, self.color.color, self.SquareOfFigure())
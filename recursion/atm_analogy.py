def get_position_in_queue(person):
    if person.next_in_queue == None:
        return 1
    
    return get_position_in_queue(person.next_in_queue) + 1


class Person:
    def __init__(self, name):
        self.name = name
        self.next_in_queue = None
    
    def set_next_person(self, person):
        self.next_in_queue = person


person1 = Person("Kelvin")
person2 = Person("John")
person3 = Person("Luke")

person1.set_next_person(person2)
person2.set_next_person(person3)


print("Position: ", get_position_in_queue(person1))




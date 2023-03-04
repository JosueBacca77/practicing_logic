from constants import FILE_TYPES

class File():
    def __init__(self, name, type, parent) -> None:
        self.name = name
        self.type = type
        self.parent = parent
        self.files = []

    def ls(self):
        for file in self.files:
            print(file.name)
    
    def add_file(self, file):
        files = self.files
        files.append(file)
        self.files = files

    def get_parent_name(self):
        if self.parent != None:
            return self.parent.get_parent_name()+'/'+self.name
        else:
            return '/'+self.name
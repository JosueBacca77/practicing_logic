from file import File
from constants import FILE_TYPES

def execute_command(command, paramemter, current_folder):
    if command == 'ls':
        current_folder.ls()

    if command == 'touch' or command == 'mkdir':
        type = FILE_TYPES['file']
        parent = current_folder
        if command == 'mkdir':
            type =  FILE_TYPES['folder']
        new_file = File(paramemter, type, parent)
        current_folder.add_file(new_file)

    if command == 'cd':
        dir_to_go = paramemter
        if dir_to_go == '.':
            pass

        if dir_to_go == '..':
            if current_folder.parent != None:
                current_folder = current_folder.parent
        
        if dir_to_go != '.' and dir_to_go != '..':
            name_folder = None
            for child in current_folder.files:
                if child.name == paramemter and child.type == FILE_TYPES['folder']:
                    name_folder = child
                    break
            if name_folder != None:
                current_folder = name_folder
            else:
                print('Directorio inexistente, proceda a crearl usando mkdir "NOMBRE DEL DIRECTORIO"')

    if command == 'pwd':
        path = current_folder.get_parent_name()
        print(path)
    
    return current_folder

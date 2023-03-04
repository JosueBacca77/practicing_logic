from file import File
from file_system import execute_command
from constants import FILE_TYPES


print('Your file system has been installed successfully!')
name = input('Enter your name: ')

home = File('home', FILE_TYPES['folder'], None)
my_folder = File(name, FILE_TYPES['folder'], home)
home.add_file(my_folder)
current_folder = my_folder

user_input = '0'
command = user_input[0]

while command != 'exit':
    
    parameter = None
    if len(user_input) == 2:
        parameter = user_input[1]
    current_folder = execute_command(command, parameter, current_folder)
    #user enter command
    user_input = input('/'+current_folder.name+' ').split()
    command = user_input[0]

import json
import os
import time

"""
A script that takes in a JSON file that contains the parameters
(mass, height, & surface) for an egg drop simulation.
This script will calculate the force of the drop on various
surfaces and determine if the egg of a given mass has broken.
The result (broken/survived, time, final force) is returned as a 
txt file.
"""
def check_parameters(file_path):
    # read in parameters JSON
    try:
        with open(file_path) as f:
            d = json.load(f)
    except (json.JSONDecodeError, FileNotFoundError) as e:
        print(f"Error reading parameters: {e}")
        return

    mass = None  # mass of egg, sig figs: 1, unit: kg

    height = None  # height of drop, sig figs: 2, unit: m

    # the "hardness" of the surface blunts the speed,
    # sig figs: 1, unit: s**-1
    surface = None

    g = 9.8  # acceleration due to gravity, sig figs: 2, unit: m/s**2

    # pull values from JSON & assign to variables
    for i in d:
        for j in d[i]:
            if i == 'size':
                mass = d[i]
            elif i == 'height':
                height = d[i]
            elif i == 'surface':
                surface = d[i]
            else:
                break

    if mass == 'small-egg':
        mass = 0.040
    elif mass == 'large-egg':
        mass = 0.060
    elif mass == 'jumbo-egg':
        mass = 0.080

    if height == 'meter':
        height = 1.0
        delta_v = 4.4
        if surface == 'hard':
            time = 0.0040
        elif surface == 'inchfoam':
            time = 0.040
        elif surface == 'foambox':
            time = 0.080
    elif height == 'fivemeters':
        height = 5.0
        delta_v = 9.9
        if surface == 'hard':
            time = 0.0030
        elif surface == 'inchfoam':
            time = 0.030
        elif surface == 'foambox':
            time = 0.060
    elif height == 'tenmeters':
        height = 10.0
        delta_v = 14.0
        if surface == 'hard':
            time = 0.0020
        elif surface == 'inchfoam':
            time = 0.020
        elif surface == 'foambox':
            time = 0.040

    # Force = m * a = m * delta(v)/t
    force = mass * (delta_v/time)  # sig figs: 1, unit: N
    final_force = round(force, 1)

    # print(mass)
    # print(delta_v)
    # print(time)
    # print(final_force)

    f=open("results.txt", "w")

    # check if egg broke
    if final_force > 24.5:
        # write fail result to txt file
        with open('results.txt', 'w') as f:
            f.write("broken\n" + str(delta_v) + "\n"+
                str(time) + "\n" +
                str(final_force) + "\n" + 
                str(mass) + "\n" + 
                str(height))
    else:  # write pass result to txt file
        with open('results.txt', 'w') as f:
            f.write("survived\n" + str(delta_v) + "\n" +
                str(time) + "\n" +
                str(final_force) + "\n" + 
                str(mass) + "\n" + 
                str(height))

def main():
    file_path = "parameters.json"
    # poll_interval = 3 # seconds

    if os.path.exists(file_path):
        while True: 
            check_parameters(file_path)
            # time.sleep(poll_interval)
    else:
        print("Invalid file path.")

# Ensures that main() is only executed when the script is run directly and not when imported as a module
if __name__ == "__main__":
    main()
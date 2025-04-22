import os

# Path to the directory containing images
directory = r"my-react-app/src/assets/trending"  # Replace with your directory path

# Get a list of all files in the directory
files = os.listdir(directory)

# Filter out only image files (based on common image extensions)
image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']
image_files = [f for f in files if any(f.lower().endswith(ext) for ext in image_extensions)]

# Rename the images
for index, image_file in enumerate(image_files, start=1):
    # Get the file extension
    file_extension = os.path.splitext(image_file)[1]
    
    # Construct the new image name
    new_name = f"img{index}{file_extension}"
    
    # Get the full path of the old and new files
    old_file = os.path.join(directory, image_file)
    new_file = os.path.join(directory, new_name)
    
    # Rename the file
    os.rename(old_file, new_file)
    print(f"Renamed: {image_file} to {new_name}")

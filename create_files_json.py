import json
import os
import base64

files = []
git_files = os.popen('git ls-files').read().strip().split('\n')

for file_path in git_files:
    if file_path:
        try:
            # Check if file is binary (like favicon.ico)
            if file_path.endswith(('.ico', '.png', '.jpg', '.jpeg', '.gif', '.woff', '.woff2')):
                with open(file_path, 'rb') as f:
                    content = base64.b64encode(f.read()).decode('utf-8')
            else:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            
            files.append({
                "path": file_path,
                "content": content
            })
        except Exception as e:
            print(f"Error reading {file_path}: {e}")

print(json.dumps(files))

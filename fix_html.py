import os

filepath = r"c:\thip-design-studio\index.html"
with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('%20', '-')
text = text.replace('LOGO-Thip-Design-Studio', 'logo-thip-design-studio')
text = text.replace('Logo-Thip-Design-Studio', 'logo-thip-design-studio')

# Replace exact occurrences without modifying other words
text = text.replace('"images/logo-thip-design-studio/logo-thip-design-studio.png"', '"images/logo-thip-design-studio/Logo-Thip-Design-Studio.png"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text)

print("HTML paths updated successfully.")

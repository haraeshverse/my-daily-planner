import sys

def process_data(data):
    # Perform some operation on data
    return {"processed_data": data.upper()}

if __name__ == "__main__":
    input_data = sys.argv[1]
    result = process_data(input_data)
    print(result)

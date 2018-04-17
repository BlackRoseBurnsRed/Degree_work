from flask import Flask, jsonify
import quandl

quandl.ApiConfig.api_key = "1jJjn5RzWYyAHbS7_viP"

aapl = quandl.get("WIKI/AAPL", start_date="2006-10-01", end_date="2012-01-01")

close_last_ten = aapl['Close'][-10:]

print(type(aapl))
print(type(close_last_ten))

print (close_last_ten.to_dict())

json = jsonify({'data': {'dict': 1, 'dictionary': 2}})
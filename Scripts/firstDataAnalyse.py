from flask import Flask, jsonify
import quandl

quandl.ApiConfig.api_key = "1jJjn5RzWYyAHbS7_viP"

aapl = quandl.get("WIKI/AAPL", start_date="20011-10-01", end_date="2012-01-01")

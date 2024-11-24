const location = {
    "Provider_id": "::",
    "Provider_type": "enum:location,1:",
    "id": "::",
    "time": {
        "label": "enum:disable,enable:",
        "timestamp": "type:datetime-local:",
        "days": "::",
        "schedule": {
            "holidays": [
                "const::"
            ] 
        },
        "range": {
            "start": "type:datetime-local:",
            "end": "type:datetime-local:"
        }
    },
    "gps": "lag_lon::",
    "address": {
        "locality": "::",
        "street": "::",
        "city": ";:",
        "area_code": "::",
        "state": "::"
    },
    "circle": {
        "gps": "lag_lon::",
        "radius": {
            "unit": "const:km:",
            "value": "type:number:"
        }
    }
};

export default location;

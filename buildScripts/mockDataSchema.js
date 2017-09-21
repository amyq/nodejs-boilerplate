export const schema_users = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 8,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "userName": {
            "type": "string",
            "faker": "internet.userName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "userName", "email"]
      }
    }
  },
  "required": ["users"]
};

export const schema_nodes = {
  "type": "object",
  "properties": {
    "nodes": {
      "type": "array",
      "minItems": 3,
      "maxItems": 8,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "userName": {
            "type": "string",
            "faker": "internet.userName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "userName", "email"]
      }
    }
  },
  "required": ["nodes"]
};

export const schema_users = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 1,
      "maxItems": 5,
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
      "minItems": 1,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "nid": {
            "type": "number",
            "unique": true,
            "chance": {
              "pickone": [
                ["1", "6", "11", "17", "33", "45"]
              ]
            }
          },
          "title": {
            "type": "string",
            "chance": {
              "pickone": [
                [
                  "Unpublished Page",
                  "Published Page",
                ]
              ]
            }
          },
          "created": {
            "type": "string",
            "format": "date-time"
          },
          "changed": {
            "type": "string",
            "format": "date-time"
          },
        },
        "required": ["id", "nid", "title", "created", "changed"]
      }
    }
  },
  "required": ["nodes"]
};

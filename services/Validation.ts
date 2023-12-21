import vjs from "validate.js";

export type FieldType =
  | "username"
  | "password"
  | "confirmPassword"
  | "email"
  | "quantity"
  | "mnemonics"
  | "tokenId";

type Constraint = {
  field: FieldType;
  value: string | number | string[] | number[];
};

type FieldConstraint = Partial<Record<FieldType, string[]>>;

const VContraints = {
  email: {
    presence: true,
    email: true,
  },
  tokenId: {
    presence: true,
    length: {
      minimum: 1,
      message: "^Please enter valid Token ID!",
    },
  },
  quantity: {
    presence: true,
    numericality: {
      onlyInteger: true,
      message: "^Please enter valid quantity!",
      notInteger: "^Please enter an integer for quantity!",
    },
  },
  username: {
    presence: {
      allowEmpty: false,
      message: "^Username cannot be empty!",
    },
    length: {
      minimum: 8,
      maximum: 30,
      tooShort: "^Username must be between 8-30 characters!",
      tooLong: "^Username must be between 8-30 characters!",
    },
    format: {
      pattern: "[a-zA-Z0-9_]+",
      flags: "i",
      message: "can only contain a-z, 0-9 and underscore",
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "^Password cannot be empty!",
    },
    length: {
      minimum: 8,
      maximum: 30,
      tooShort: "^Password must be between 8-30 characters!",
      tooLong: "^Password must be between 8-30 characters!",
    },
    format: {
      // pattern: "[a-zA-Z0-9_]+",
      pattern: "[a-zA-Z0-9_$&+,:;=?@#|'<>.^*()%!-]+",
      flags: "i",
      message:
        "^Password can only contain a-z, 0-9 and common punctuation characters",
    },
  },
  confirmPassword: {
    presence: true,
    equality: {
      attribute: "password",
      message: "^Password mismatch!",
    },
  },

  mnemonics: {
    presence: {
      allowEmpty: false,
      message: "^Mnemonics cannot be empty!",
    },
  },
};

export const validateFields = (toValidate: Constraint[]): FieldConstraint => {
  let _values = {};
  let _contraints = {};

  toValidate.forEach((el) => {
    _values = {
      ..._values,

      [el.field]: el.value,
    };
    _contraints = {
      ..._contraints,
      [el.field]: VContraints[el.field],
    };
  });

  return vjs(_values, _contraints);
};

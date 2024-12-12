const prettier = require("prettier");
const { builders: { concat, hardline } } = prettier.doc;

const CLASSNAMES_PER_LINE = 5;

function isClassNameAttribute(node) {
  return (
    node.type === "JSXAttribute" &&
    (node.name.name === "className" || node.name.name === "class")
  );
}

function formatClassNames(value) {
  const classNames = value.split(" ").filter(Boolean);
  const lines = [];
  for (let i = 0; i < classNames.length; i += CLASSNAMES_PER_LINE) {
    lines.push(classNames.slice(i, i + CLASSNAMES_PER_LINE).join(" "));
  }
  return lines.join("\n");
}

function printJSXAttribute(path, options, print) {
  const node = path.getValue();
  if (isClassNameAttribute(node)) {
    const valueNode = node.value;
    if (valueNode.type === "StringLiteral") {
      valueNode.value = formatClassNames(valueNode.value);
    } else if (valueNode.type === "JSXExpressionContainer" && valueNode.expression.type === "StringLiteral") {
      valueNode.expression.value = formatClassNames(valueNode.expression.value);
    }
  }
  return concat([path.call(print, "name"), "=", path.call(print, "value")]);
}

module.exports = {
  parsers: {
    typescript: {
      ...prettier.parsers.typescript,
      print(path, options, print) {
        const node = path.getValue();
        if (node.type === "JSXAttribute") {
          return printJSXAttribute(path, options, print);
        }
        return prettier.parsers.typescript.print(path, options, print);
      }
    }
  }
};


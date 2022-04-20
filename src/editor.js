import MonacoEditor from 'react-monaco-editor';

const initCode = "const myFunc = () => {\n\treturn 'foo'; \n\tconst newConst = 'bar';\n}"

export const BasicEditor = () => {
	    return (
      <MonacoEditor
        width="100vw"
        height="600"
        language="javascript"
        theme="vs-dark"
        defaultValue={initCode}
        options={{
      selectOnLineNumbers: true,
      fontSize: 18,
      colorDecorators: true
    }}
      />
    );
}
import Editor from "../components/Editor";
import Node from "./Node";
import NodeFactory from "./NodeFactory";
import NodeOutput from "./NodeOutput";

export default class SingleOutputNode<T> extends Node {
	constructor(editor: Editor<NodeFactory>, name: string, value: T) {
		super (editor, name);
		this.outputs.set("value", new NodeOutput<T>(this, "value", name, value));
	}

	public get output(): NodeOutput<T> {
		return this.outputs.get("value") as NodeOutput<T>;
	}
}
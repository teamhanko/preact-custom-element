import { ComponentClass, FunctionComponent, FunctionalComponent } from 'preact';
declare function register(
	componentDefinition:
		| FunctionComponent<any>
		| ComponentClass<any>
		| FunctionalComponent<any>,
	tagName?: string,
	observedAttributes?: string[],
	options?: { shadow: boolean }
): void;

export = register;

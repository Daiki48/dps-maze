import { Denops, Maze } from "./deps.ts";

export async function main(denops: Denops): Promise<void> {
	denops.dispatcher = {
		async maze(): Promise<void> {
			const maze = new Maze({}).generate();
			const content = maze.getString();
			await denops.cmd("enew");
			await denops.call("setline", 1, content.split(/\n/));
		},
	};
	await denops.cmd(
		`command! Maze call denops#request('${denops.name}', 'maze', [])`
	);
}

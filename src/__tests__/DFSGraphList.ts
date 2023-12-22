import GraphDfs from "@code/GraphDFS";
import { list2 } from "./graph";

test("dfs - graph", function () {
    expect(GraphDfs(list2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(GraphDfs(list2, 6, 0)).toEqual(null);
});


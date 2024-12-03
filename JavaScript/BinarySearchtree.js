const CenterItem = (lists) => {
    let center_item = null;
    let center_index = null;
    if (lists.length > 0) {
        if (lists.length % 2 === 0) {
            center_index = (lists.length) / 2 - 1;
            center_item = lists[center_index];
        } else {
            center_index = (lists.length - 1) / 2;
            center_item = lists[center_index];
        }
    }

    return { center_item, center_index };
};

const BinarySearchtree = (lists = []) => {
    // Sorting lists numerically
    const sorted_lists = lists.sort((a, b) => a - b);
    
    // Find center item
    const { center_item, center_index } = CenterItem(sorted_lists);

    // Create tree with center item
    const tree = {
        center: center_item,
        left: sorted_lists.slice(0, center_index),
        right: sorted_lists.slice(center_index + 1)
    };

    // Recursive function to build the binary tree
    const buildTree = (list) => {
        if (list.length === 0) {
            return null;
        }

        const { center_item, center_index } = CenterItem(list);
        const node = {
            node: center_item,
            left: buildTree(list.slice(0, center_index)),
            right: buildTree(list.slice(center_index + 1))
        };
        
        return node;
    };

    const root = buildTree(sorted_lists);

    return {tree,root};
};

const lists = [1, 3, 4, -1, -4, -5, 10, 7];
console.log(JSON.stringify(BinarySearchtree(lists), null, 2));

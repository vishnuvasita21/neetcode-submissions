/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {}

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    serialize(root){
        const res = []
        this.dfsSer(root, res)
        return res.join(",");
    }

    dfsSer(node, res){
        if(!node) {
            res.push('N')
            return
        }
        res.push(node.val.toString())
        this.dfsSer(node.left, res)
        this.dfsSer(node.right, res)
    }
    deserialize(data) {
        const vals = data.split(",")
        const i = {val: 0}
        return this.dfsDes(vals,i)
    }

    dfsDes(vals, i){
        if(vals[i.val] === 'N'){
            i.val ++
            return null
        }
        const node= new TreeNode(parseInt(vals[i.val]));
        i.val++
        node.left = this.dfsDes(vals, i)
        node.right = this.dfsDes(vals, i)
        return node
    }
}

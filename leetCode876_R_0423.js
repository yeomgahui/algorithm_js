/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    walker = runner = head;
    
    while(runner && runner.next){
        walker = walker.next;
        runner = runner.next.next;
    }
    return walker;
    
};

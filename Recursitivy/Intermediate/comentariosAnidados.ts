type Comentario = {
  id: string;
  parentId: string | null;
  author: string;
  content: string;
  createdAt: Date;
};

const comments: Comentario[] = [
  { id: "1", parentId: null, author: "Alice", content: "Root comment 1", createdAt: new Date() },
  { id: "2", parentId: "1", author: "Bob", content: "Reply to 1", createdAt: new Date() },
  { id: "3", parentId: "1", author: "Charlie", content: "Another reply to 1", createdAt: new Date() },
  { id: "4", parentId: "2", author: "Dave", content: "Reply to 2", createdAt: new Date() },
  { id: "5", parentId: null, author: "Eve", content: "Root comment 2", createdAt: new Date() },
];

type CommentNode = Comentario & {
  children: CommentNode[];
};


function buildCommentTree(comments: Comentario[]){
    // const sortedComment = comments.sort((a, b) => 
    //     Number(a.parentId ?? 0) - Number(b.parentId ?? 0) 
    // )
    let hierarchyComments: CommentNode[] = []
    for (let index = 0; index < comments.length; index++) {
        const current = comments[index];
        if(!current.parentId) hierarchyComments.push({
            ...current,
            children: []
        })
        hierarchyComments = comments.map((comment: Comentario)=>{
            if(comment.id == current.parentId){
                return {
                    ...comment,
                    children: [
                        ...comment.children,
                        ...[{
                            ...current,
                            children: []
                        }]
                    ]
                }
            }
            return comment
        })
    }
    return hierarchyComments
}

console.log(JSON.stringify(buildCommentTree(comments)))

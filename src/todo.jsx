// export default function Todo({ task, isDone }) {
//   return <li>task: {task}</li>;
// }
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>finished : {task}</li>;
//   } else {
//     return <li>Work on : {task}</li>;
//   }
// }
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work on "} : {task}
//     </li>
//   );
// }

export default function Todo({ task, isDone }) {
  return (
    <>
      <li>{task} {isDone && ":done"}</li>
    </>
  );
}

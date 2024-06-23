// export const LoginForm = () => {
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault()
//         const formData = new FormData(e.target)
//         const username = formData.get("username")
//         const password = formData.get("password")
//         fetch("http://localhost:3001/api/login", {
//           body: {
//             username,
//             password,
//           },
//           method: "POST",
//         })
//       }}
//     >
//       <div>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" name="username" />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" name="password" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

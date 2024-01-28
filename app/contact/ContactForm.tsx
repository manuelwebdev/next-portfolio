export default function () {
  return (
    <div className="w-full">
      <form action="" method="POST" className="flex flex-col gap-2">
        <input
          type="text"
          name="first name"
          placeholder="First Name"
          className="w-full border border-primary border-solid p-1 rounded"
        />
        <input
          type="text"
          name="last name"
          placeholder="Last Name"
          className="w-full border border-primary border-solid p-1 rounded"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full border border-primary border-solid p-1 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full border border-primary border-solid p-1 rounded"
        />

        <input
          type="submit"
          value="Submit"
          className="w-fit self-end bg-primary text-white border border-primary border-solid py-1 px-8 rounded"
        />
      </form>
    </div>
  )
}

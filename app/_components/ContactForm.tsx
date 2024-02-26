export default function ContactForm() {
  return (
    <div className="w-full">
      <form action="/" method="POST" className="flex flex-col gap-2">
        <input
          type="text"
          name="first name"
          placeholder="First Name"
          className="w-full rounded border border-solid border-primary p-1 disabled:cursor-not-allowed"
          disabled
        />
        <input
          type="text"
          name="last name"
          placeholder="Last Name"
          className="w-full rounded border border-solid border-primary p-1 disabled:cursor-not-allowed"
          disabled
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full rounded border border-solid border-primary p-1 disabled:cursor-not-allowed"
          disabled
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full rounded border border-solid border-primary p-1 disabled:cursor-not-allowed"
          disabled
        />

        <input
          type="submit"
          value="Submit"
          className="w-fit cursor-pointer self-end rounded border border-solid border-primary bg-primary px-8 py-1 text-white disabled:cursor-not-allowed disabled:opacity-30"
          disabled
        />
      </form>
    </div>
  )
}

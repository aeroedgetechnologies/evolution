export default function ContactPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact</h1>
      <p>Email: info@mfsupport.com</p>
      <p>Phone: +31 (0) 26 479 999 9</p>
      <form style={{ marginTop: '2rem' }}>
        <label>Name:<br /><input type="text" name="name" /></label><br /><br />
        <label>Email:<br /><input type="email" name="email" /></label><br /><br />
        <label>Message:<br /><textarea name="message" rows={4} /></label><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
} 
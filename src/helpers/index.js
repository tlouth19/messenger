export const createMessage = (text = '', image = '', type) => ({
  _id: Math.random(),
  text,
  image,
  type,
  sent_at: new Date()
})
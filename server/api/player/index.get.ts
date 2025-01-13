import prisma from "~/server/utils/prisma"

export default defineEventHandler(async (event) => {
  const player = await prisma.user.findFirst()

  console.log(player, 'Here is the player')

  return player
})

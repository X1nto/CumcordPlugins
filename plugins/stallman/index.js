import { addCommand } from "@cumcord/commands"

export default (_data) => {
  let stallman;
  return {
    onLoad() {
      stallman = addCommand({
        name: "stallman",
        description: "Generate a stallman copypasta with your desired word instead of \"Linux\".",
        args: [
          {
            name: "replacement",
            description: "Replacement of the word \"Linux\" in the copypasta.",
            type: "string", 
            required: true
          }
        ],
        handler: (ctx, _send) => {
          const replacement = ctx.args.replacement;
          let copypasta = `I'd just like to interject for a moment. What you're refering to as ${replacement}, is in fact, GNU/${replacement}, or as I've recently taken to calling it, GNU plus ${replacement}. ${replacement} is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.\n
Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called ${replacement}, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.\n
There really is a ${replacement}, and these people are using it, but it is just a part of the system they use. ${replacement} is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. ${replacement} is normally used in combination with the GNU operating system: the whole system is basically GNU with ${replacement} added, or GNU/${replacement}. All the so-called ${replacement} distributions are really distributions of GNU/${replacement}\!`;
          return copypasta;
        }
      });
    },

    onUnload() {
      stallman();
    },
  };
}
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
   { id: "hello-world" },
   { event: "test/hello.world" },
   async ({ event, step }) => {
      // Imagine this download step
      await step.sleep("wait-a-moment", "30s");
      // Imagine this is transcript stage
      await step.sleep("wait-a-moment", "10s");
      // Imagine this is summary phase
      await step.sleep("wait-a-moment", "5s");

      return { message: `Hello ${event.data.email}!` };
   }
);

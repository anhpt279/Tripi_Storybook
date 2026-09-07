import { Meta, StoryObj } from "@storybook/react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Form,
  FormRow,
  FormSection,
  FormHeader,
  FormTitle,
  FormSubtitle,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormButtons,
} from "@/components/ui/data-entry/form"
import { Input } from "@/components/ui/data-entry/input"
import { Button } from "@/components/ui/base/button"


const meta = {
  title: "Data Entry/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

// validation schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "at least 2 characters",
  }),
  email: z.string().email({
    message: "Enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "at least 6 characters",
  }),
})

// Basic form sample
export const BasicForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }

    return (
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px]">
          <FormItem>
            <FormLabel required>Username</FormLabel>
            <FormControl name="username">
              <Input
                {...form.register("username")}
                placeholder="Enter username"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.username?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Full name</FormLabel>
            <FormControl name="email">
              <Input
                {...form.register("email")}
                type="email"
                placeholder="Enter email"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.email?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Password</FormLabel>
            <FormControl name="password">
              <Input
                {...form.register("password")}
                type="password"
                placeholder="Enter password"
              />
            </FormControl>
            {!form.formState.errors.password && (
              <FormDescription>at least 6 characters</FormDescription>
            )}
            <FormMessage error>{form.formState.errors.password?.message}</FormMessage>
          </FormItem>

          <Button type="submit" className="w-full">Submit</Button>
        </Form>
      </FormProvider>
    )
  }
}

// Horizontal form example
export const HorizontalForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }

    return (
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)} className="w-[800px]">
          <FormRow>
            <FormItem>
              <FormLabel required>Username</FormLabel>
              <FormControl name="username">
                <Input
                  {...form.register("username")}
                  placeholder="Enter username"
                />
              </FormControl>
              <FormMessage error>{form.formState.errors.username?.message}</FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel required>Full name</FormLabel>
              <FormControl name="email">
                <Input
                  {...form.register("email")}
                  type="email"
                  placeholder="Enter email"
                />
              </FormControl>
              <FormMessage error>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
          </FormRow>

          <FormItem>
            <FormLabel required>Password</FormLabel>
            <FormControl name="password">
              <Input
                {...form.register("password")}
                type="password"
                placeholder="Enter password"
              />
            </FormControl>
            {!form.formState.errors.password && (
              <FormDescription>at least 6 characters</FormDescription>
            )}
            <FormMessage error>{form.formState.errors.password?.message}</FormMessage>
          </FormItem>

          <Button type="submit" className="w-full">Submit</Button>
        </Form>
      </FormProvider>
    )
  }
}

// sample
export const RealTimeValidation: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      mode: "onChange", // sample
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }

    return (
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px]">
          <FormItem>
            <FormLabel required>Username</FormLabel>
            <FormControl name="username">
              <Input
                {...form.register("username")}
                placeholder="Enter username"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.username?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Full name</FormLabel>
            <FormControl name="email">
              <Input
                {...form.register("email")}
                type="email"
                placeholder="Enter email"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.email?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Password</FormLabel>
            <FormControl name="password">
              <Input
                {...form.register("password")}
                type="password"
                placeholder="Enter password"
              />
            </FormControl>
            {!form.formState.errors.password && (
              <FormDescription>at least 6 characters</FormDescription>
            )}
            <FormMessage error>{form.formState.errors.password?.message}</FormMessage>
          </FormItem>

          <Button type="submit" className="w-full">Submit</Button>
        </Form>
      </FormProvider>
    )
  }
}

// sample
export const ValidationStates: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }

    return (
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px]">
          <FormItem>
            <FormLabel required>Username</FormLabel>
            <FormControl name="username">
              <Input
                {...form.register("username")}
                placeholder="Enter username"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.username?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Full name</FormLabel>
            <FormControl name="email">
              <Input
                {...form.register("email")}
                type="email"
                placeholder="Enter email"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.email?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Password</FormLabel>
            <FormControl name="password">
              <Input
                {...form.register("password")}
                type="password"
                placeholder="Enter password"
              />
            </FormControl>
            {!form.formState.errors.password && (
              <FormDescription>at least 6 characters</FormDescription>
            )}
            <FormMessage error>{form.formState.errors.password?.message}</FormMessage>
          </FormItem>

          <Button type="submit" className="w-full">Submit</Button>
        </Form>
      </FormProvider>
    )
  }
}

// sample
export const DisabledForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "john_doe",
        email: "john@sample.com",
        password: "password123",
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }

    return (
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px]">
          <FormItem>
            <FormLabel required>Username</FormLabel>
            <FormControl name="username">
              <Input
                {...form.register("username")}
                placeholder="Enter username"
                disabled
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.username?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Full name</FormLabel>
            <FormControl name="email">
              <Input
                {...form.register("email")}
                type="email"
                placeholder="Enter email"
                disabled
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.email?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Password</FormLabel>
            <FormControl name="password">
              <Input
                {...form.register("password")}
                type="password"
                placeholder="Enter password"
                disabled
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.password?.message}</FormMessage>
          </FormItem>

          <Button type="submit" className="w-full" disabled>Submit</Button>
        </Form>
      </FormProvider>
    )
  }
}

// sample
export const ButtonLayouts: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }

    return (
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px]">
          <FormItem>
            <FormLabel required>Username</FormLabel>
            <FormControl name="username">
              <Input
                {...form.register("username")}
                placeholder="Enter username"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.username?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Full name</FormLabel>
            <FormControl name="email">
              <Input
                {...form.register("email")}
                type="email"
                placeholder="Enter email"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.email?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel required>Password</FormLabel>
            <FormControl name="password">
              <Input
                {...form.register("password")}
                type="password"
                placeholder="Enter password"
              />
            </FormControl>
            <FormMessage error>{form.formState.errors.password?.message}</FormMessage>
          </FormItem>

          <FormButtons layout="full" direction="vertical">
            <Button type="submit" className="w-full">Submit</Button>
            <Button variant="outline" className="w-full">Cancel</Button>
          </FormButtons>
        </Form>
      </FormProvider>
    )
  }
}

// sample - sample
const layoutDemoSchema = z.object({
  // sample
  company: z.string().optional(),
  position: z.string().optional(),
  startYear: z.string().optional(),
  startMonth: z.string().optional(),
  endYear: z.string().optional(),
  endMonth: z.string().optional(),
  city: z.string().optional(),
  department: z.string().optional(),
  workType: z.string().optional(),
  achievement: z.string().optional(),

  // sample
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),

  // sample
  country: z.string().optional(),
  state: z.string().optional(),
  city2: z.string().optional(),
  zipCode: z.string().optional(),

  // sample
  skills: z.array(z.string()).optional(),
})

export const ComplexForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof layoutDemoSchema>>({
      resolver: zodResolver(layoutDemoSchema),
      defaultValues: {},
    })

    function onSubmit(values: z.infer<typeof layoutDemoSchema>) {
      console.log(values)
    }

    return (
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)} layout="sectioned" className="max-w-4xl mx-auto">
          <FormHeader>
            <FormTitle>Full name</FormTitle>
            <FormSubtitle>sample FormRow sample</FormSubtitle>
          </FormHeader>

          {/* sample - sample FormRow sample */}
          <FormSection title="sample 1" subtitle="sample">

            {/* Example: sample + sample (1:1) */}
            <FormRow columns={2}>
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a value" />
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a value" />
                </FormControl>
              </FormItem>
            </FormRow>

            {/* Example: sample + sample (FormRow) */}
            <FormRow columns={2}>
              {/* sample - sample */}
              <FormRow columns={2} spacing="sm">
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a value" />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="invisible">Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a value" />
                  </FormControl>
                </FormItem>
              </FormRow>

              {/* sample - sample */}
              <FormRow columns={2} spacing="sm">
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a value" />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="invisible">Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a value" />
                  </FormControl>
                </FormItem>
              </FormRow>
            </FormRow>

            {/* Example: sample + sample (1:1) */}
            <FormRow columns={2}>
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a value" />
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Example: Data" />
                </FormControl>
              </FormItem>
            </FormRow>

            {/* Example: sample + sample (1:3) - sample FormRow sample 4 sample */}
            <FormRow columns={4}>
              <FormItem span={1}>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a value" />
                </FormControl>
              </FormItem>
              <FormItem span={3}>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="For example: Full name, job title, or department..." />
                </FormControl>
              </FormItem>
            </FormRow>
          </FormSection>

          <FormButtons>
            <Button variant="outline">Full name</Button>
            <Button type="submit">Full name</Button>
          </FormButtons>
        </Form>
      </FormProvider>
    )
  }
}
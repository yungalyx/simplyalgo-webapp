"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "./ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string(),
  strategyImage:  
    z.any().optional()
    .refine(file => file.length == 1 ? ACCEPTED_IMAGE_MIME_TYPES.includes(file?.[0]?.type) ? true : false : true, 'Invalid file. choose either JPEG or PNG image')
    .refine(file => file.length == 1 ? file[0]?.size <= MAX_FILE_SIZE ? true : false : true, 'Max file size allowed is 5MB.'),
  triggerType: z.enum(["api", "upload", "manual"]),
  strategyCode: z.string().optional(),
}).refine((data) => {
  if (data.triggerType == "upload") {
    return !!data.strategyCode;
  }
  return true;
}, {
  path: ["triggerType"],
  message: "Pine script is required"
})

export function StrategyCreationForm() {

  const [submitting, isSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      strategyCode: "", 
      strategyImage: undefined,
      triggerType: undefined,
    },
  }) 
  // 2. Define a submit handler.
  const handleSubmit = (values: z.infer<typeof formSchema>) => {  
    isSubmitting(true);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  const triggerType = form.watch("triggerType")
  const fileRef = form.register("strategyImage")

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
              <FormItem>
                <FormLabel>Strategy Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name. You cannot change this once it is created.
                </FormDescription>
                <FormMessage />
              </FormItem>    
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is description
                </FormDescription>
                <FormMessage />
              </FormItem>    
          )}
        />
        <FormField
          control={form.control}
          name="strategyImage"
          render={({ field }) => (
              <FormItem>
                <FormLabel>Logo</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...fileRef} type="file" onChange={(event) => field.onChange(event.target?.files?.[0] ?? undefined)}/>
                </FormControl>
                <FormDescription>
                  This will be your public logo
                </FormDescription>
                <FormMessage />
              </FormItem>    
          )}
        />
         <FormField
          control={form.control}
          name="triggerType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trade Source</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a trigger mechanism" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="manual">Manual Input</SelectItem>
                  <SelectItem value="api">Submit via API</SelectItem>
                  <SelectItem value="upload">Upload Pine script</SelectItem>
              
                </SelectContent>
              </Select>
              <FormDescription>
                Choose how you will trigger your strategies
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {triggerType == "upload" && 
          <FormField
           control={form.control}
           name="strategyCode"
           render={({ field }) => (
               <FormItem>
                 <FormLabel> Strategy Code</FormLabel>
                 <FormControl>
                   <Input placeholder="shadcn" {...field} />
                 </FormControl>
                 <FormDescription>
                   Gimme dat code 
                 </FormDescription>
                 <FormMessage />
               </FormItem>    
           )}
         />     
        }
        <Button type="submit" disabled={submitting} className="w-full">Submit</Button>
        <Button type="button" onClick={() => console.log(form.formState.errors)}> Test</Button>
      </form>
    </Form>
  )
}

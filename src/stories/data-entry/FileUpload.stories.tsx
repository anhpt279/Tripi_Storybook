import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from '../../components/ui'

const meta: Meta<typeof FileUpload> = {
  title: 'Data Entry/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: 'text',
      description: 'Choose a file or drag it into the drop zone.',
    },
    maxSize: {
      control: 'number',
      description: 'Upload instructions',
    },
    disabled: {
      control: 'boolean',
      description: 'Choose a file or drag it into the drop zone.',
    },
    helperText: {
      control: 'text',
      description: 'Choose a file or drag it into the drop zone.',
    },
    placeholder: {
      control: 'text',
      description: 'Choose a file or drag it into the drop zone.',
    },
    variant: {
      control: 'radio',
      options: ['button', 'dropzone'],
      description: 'Choose a file or drag it into the drop zone.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    helperText: 'PDF or DOCX files up to 10 MB',
    placeholder: 'Enter a value',
  },
}

export const WithSizeLimit: Story = {
  args: {
    maxSize: 2 * 1024 * 1024, // 2MB
    helperText: 'Images up to 2 MB',
    placeholder: 'Enter a value',
  },
}

export const ImageOnly: Story = {
  args: {
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024, // 5MB
    helperText: 'PDF or DOCX files up to 5 MB',
    placeholder: 'Enter a value',
  },
}

export const DocumentsOnly: Story = {
  args: {
    accept: '.pdf,.doc,.docx,.txt',
    maxSize: 10 * 1024 * 1024, // 10MB
    helperText: 'PDF and Word documents up to 10 MB',
    placeholder: 'Enter a value',
  },
}

export const DropzoneDefault: Story = {
  args: {
    variant: 'dropzone',
    placeholder: 'Enter a value',
  },
}

export const DropzoneImageOnly: Story = {
  args: {
    variant: 'dropzone',
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024, // 5MB
    placeholder: 'Enter a value',
  },
}

export const DropzoneDocuments: Story = {
  args: {
    variant: 'dropzone',
    accept: '.pdf,.doc,.docx',
    maxSize: 10 * 1024 * 1024, // 10MB
    placeholder: 'Enter a value',
  },
}

export const DropzoneDisabled: Story = {
  args: {
    variant: 'dropzone',
    disabled: true,
    placeholder: 'Enter a value',
  },
}
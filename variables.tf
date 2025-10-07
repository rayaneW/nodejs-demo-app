variable "aws_region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "instance_name" {
  default = "terraform-ubuntu-2404"
}

variable "key_name" {
  default = "github-deploy-key"
}

variable "public_key" {
  description = "Public SSH key to use"
  type        = string
}

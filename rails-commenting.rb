# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) listing all the items in the model BlogPost
class BlogPostsController < ApplicationController
  def index
    # ---2) Define the variable
    @posts = BlogPost.all
  end

  def show
    # ---3)Listing one item in the model.
    @post = BlogPost.find(params[:id])
  end

  # ---4) Displays a form to the user.
  def new
    @post = Post.new
  end

  def create
    # ---5)Adds information to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) edits the database.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) modifies the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) removes information from the database.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)Need the private keyword to protect the parameters.
  private
  def blog_post_params
    # ---10)require and permit database to be saved.
    params.require(:blog_post).permit(:title, :content)
  end

end

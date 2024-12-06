export default function Widget() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
          <div className="flex justify-between w-full mb-6">
            <div className="text-xl font-bold text-primary">Intch</div>
            <div className="flex space-x-4">
              <button className="text-muted-foreground">En</button>
              <button className="bg-secondary text-secondary-foreground p-2 rounded">Sign In</button>
              <button className="bg-primary text-primary-foreground p-2 rounded">Sign Up</button>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-4">
            Professional Networking App for the <span className="text-accent">Future of Work</span> 🚀
          </h1>
          
          <p className="text-muted-foreground text-center mb-6">
            Intch connects top professionals with businesses for part-time roles at a third of the cost
          </p>
          
          <button className="bg-primary text-primary-foreground p-3 rounded-lg">Sign Up</button>
          
        </div>
    )
}
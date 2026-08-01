import { Menu } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'
import { Button } from '../../../components/ui/button'

const POSHeader = () => {
  return (
    <div className="bg-card border-b px-6 py-4">
        <div className="flex items-center justify-between">
            <div>
                <Button>
                    <Menu />
                </Button>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-foreground">POS Terminal</h1>
                <p className='text-sm text-muted-foreground'>Create New Order</p>
            </div>
            <div className="flex items-center space-x-2">
                <Avatar>
                    <AvatarImage src="https://pixabay.com/get/g0b18bf74ea521beb5585db3af531e3c37940b4049529307f45f56bfdbe1f1972ef3e66cb8b61f5fdb4a15afc59d442c4_1920.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    </div>
  )
}

export default POSHeader
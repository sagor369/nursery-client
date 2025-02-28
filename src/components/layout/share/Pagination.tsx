import { Button } from "@/components/ui/button"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useNavigate } from "react-router-dom"
 

 const  PaginationPage =({page, totalPage}:{page: number, totalPage: number})=> {
  const naviagate = useNavigate()
  const previousBtn = () =>{
    if(!page || page >1){
      naviagate(`/product?page=${page-1}`)
    }
  }
  const nextBtn = () =>{
    if( page < totalPage){
      naviagate(`/product?page=${page+1}`)
    }
    if(!page){
      naviagate(`/product?page=${page+2}`)
    }
  }
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button disabled={page===1} onClick={previousBtn} className="bg-inherit text-black hover:bg-white hover:text-black p-0">
            <PaginationPrevious />
            </Button>
          </PaginationItem>
            {
                Array.from({length:totalPage}).map((_,i) => <PaginationItem>
                <PaginationLink href={`/product?page=${i+1}`} isActive={page ? i+1 == Number(page) : i == 0}> {i +1}</PaginationLink>
              </PaginationItem>)
            }
          <PaginationItem>
          <Button disabled={totalPage===page} onClick={nextBtn} className="bg-inherit text-black hover:bg-white hover:text-black p-0 disabled:cursor-none">
            
            <PaginationNext   />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  export default PaginationPage
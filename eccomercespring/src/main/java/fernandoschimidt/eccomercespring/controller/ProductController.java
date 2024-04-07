package fernandoschimidt.eccomercespring.controller;

import fernandoschimidt.eccomercespring.model.Product;
import fernandoschimidt.eccomercespring.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;


    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    private Product create(@RequestBody Product product) {
        return productService.create(product);
    }

    @GetMapping
    private List<Product> productList() {
        return productService.listAll();
    }
}

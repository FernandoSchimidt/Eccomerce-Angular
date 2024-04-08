package fernandoschimidt.eccomercespring.controller;

import fernandoschimidt.eccomercespring.model.Product;
import fernandoschimidt.eccomercespring.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Product> create(@RequestBody Product product) {
        return new ResponseEntity<>(productService.create(product), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Product>> productList() {
        return new ResponseEntity<>(productService.listAll(), HttpStatus.OK);
    }
}

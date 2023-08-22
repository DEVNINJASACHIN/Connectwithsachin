import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;

public class CinemaTicketBooking extends Application {
    private static final double TICKET_PRICE = 10.0; // Price per ticket
    private static final int MAX_SEATS = 100; // Maximum seats available
    private static int availableSeats = MAX_SEATS; // Remaining seats available

    private Label seatsLabel;
    private Label totalAmountLabel;

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Online Cinema Ticket Booking");

        VBox root = new VBox(10);
        root.setPadding(new Insets(10));

        Label titleLabel = new Label("Welcome to Online Cinema Ticket Booking");
        titleLabel.setStyle("-fx-font-size: 16px; -fx-font-weight: bold;");

        HBox seatsBox = new HBox(10);
        seatsBox.getChildren().addAll(new Label("Available Seats:"), createSeatsLabel());
        seatsBox.setSpacing(10);

        HBox numTicketsBox = new HBox(10);
        numTicketsBox.getChildren().addAll(new Label("Number of Tickets:"), createNumTicketsField());
        numTicketsBox.setSpacing(10);

        HBox paymentMethodBox = new HBox(10);
        paymentMethodBox.getChildren().addAll(new Label("Payment Method:"), createPaymentMethodChoiceBox());
        paymentMethodBox.setSpacing(10);

        HBox totalAmountBox = new HBox(10);
        totalAmountBox.getChildren().addAll(new Label("Total Amount:"), createTotalAmountLabel());
        totalAmountBox.setSpacing(10);

        Button bookButton = new Button("Book Tickets");
        bookButton.setOnAction(event -> bookTickets());

        root.getChildren().addAll(titleLabel, seatsBox, numTicketsBox, paymentMethodBox, totalAmountBox, bookButton);

        Scene scene = new Scene(root, 400, 200);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private Label createSeatsLabel() {
        seatsLabel = new Label(String.valueOf(availableSeats));
        return seatsLabel;
    }

    private TextField createNumTicketsField() {
        TextField numTicketsField = new TextField();
        numTicketsField.setPromptText("Enter number of tickets");

        // Validate input to allow only numeric values
        numTicketsField.textProperty().addListener((observable, oldValue, newValue) -> {
            if (!newValue.matches("\\d*")) {
                numTicketsField.setText(newValue.replaceAll("[^\\d]", ""));
            }
        });

        return numTicketsField;
    }

    private ChoiceBox<String> createPaymentMethodChoiceBox() {
        ChoiceBox<String> paymentMethodChoiceBox = new ChoiceBox<>();
        paymentMethodChoiceBox.getItems().addAll("Credit Card", "Debit Card", "Net Banking");
        paymentMethodChoiceBox.getSelectionModel().selectFirst();
        return paymentMethodChoiceBox;
    }

    private Label createTotalAmountLabel() {
        totalAmountLabel = new Label("$0.0");
        return totalAmountLabel;
    }

    private void bookTickets() {
        int numTickets = Integer.parseInt(createNumTicketsField().getText());

        if (numTickets <= 0 || numTickets > availableSeats) {
            Alert alert = new Alert(Alert.AlertType.ERROR);
            alert.setTitle("Error");
            alert.setHeaderText(null);
            alert.setContentText("Invalid number of tickets or insufficient seats!");
            alert.showAndWait();
            return;
        }

        double totalAmount = numTickets * TICKET_PRICE;
        totalAmountLabel.setText("$" + totalAmount);

        String paymentMethod = createPaymentMethodChoiceBox().getValue();

        boolean paymentStatus = processPayment(paymentMethod, totalAmount);

        if (paymentStatus) {
            availableSeats -= numTickets;
            seatsLabel.setText(String.valueOf(availableSeats));

            Alert alert = new Alert(Alert.AlertType.INFORMATION);
            alert.setTitle("Booking Successful");
            alert.setHeaderText(null);
            alert.setContentText("Booking successful! Enjoy the movie!");
            alert.showAndWait();
        } else {
            Alert alert = new Alert(Alert.AlertType.ERROR);
            alert.setTitle("Payment Failed");
            alert.setHeaderText(null);
            alert.setContentText("Payment failed. Booking canceled.");
            alert.showAndWait();
        }
    }

    private boolean processPayment(String paymentMethod, double totalAmount) {
       // code 
        return true;
    }
}

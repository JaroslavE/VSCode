import org.jnetpcap.Pcap;
import org.jnetpcap.packet.PcapPacket;
import org.jnetpcap.packet.PcapPacketHandler;

public class Listener{
	
	private Pcap pcap;
	private Port port;

	public void setListener(Pcap setPcap, Port port) {
		this.pcap = setPcap;
        this.port = port;
	}
	
	PcapPacketHandler<Integer> jpacketHandler = new PcapPacketHandler<Integer>() {  
		synchronized public void nextPacket(PcapPacket packet, Integer miesto) {
    		port.acceptPacket.add(packet);
 		}
    };
	
	void ListenPacket() {
		//while(true) {
            pcap.loop(100, jpacketHandler, 1);
            System.out.println(port.acceptPacket.size()); 
        //}
	}
}
